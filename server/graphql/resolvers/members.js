import { Member } from '../../models/index.js';

const resolvers = {
  Query: {
    members: async () => {
      try {
        // Fetch all members from the database
        const allMembers = await Member.find();

        // Return the list of members
        return allMembers;
      } catch (error) {
        console.error("Error fetching members:", error);
        throw new Error("Error fetching members");
      }
    },
    member: async (_, { _id }) => {
      try {
        // Fetch a single member based on their _id from the database
        const singleMember = await Member.findById(_id);

        // If no member is found with the provided _id
        if (!singleMember) {
          throw new Error('Member not found');
        }

        // Return the fetched member
        return singleMember;
      } catch (error) {
        console.error("Error fetching member:", error);
        throw new Error("Error fetching member");
      }
    },
  },
  Mutation: {
    addMember: async (_, { firstName, lastName, email, school: schoolInput }, context) => {
      if(!context.user) {
        throw new Error("You need to log in to do this.");
      }
      try {
        const newMember = await Member({
          firstName,
          lastName,
          email,
          school: {
            name: schoolInput.name,
            phone: schoolInput.phone,
            address: {
              street1: schoolInput.address.street1,
              street2: schoolInput.address.street2,
              city: schoolInput.address.city,
              state: schoolInput.address.state,
              zip: schoolInput.address.zip
            }
          }
        });

        const member = await newMember.save();

        return member;
      } catch (error) {
        console.error("Error adding member:", error);
        throw new Error(`Error adding member: ${error.message}`)
      }
    },
    updateMember: async (_, { _id, firstName, lastName, email, school: schoolInput }, context) => {
      if(!context.user) {
        throw new Error("You need to log in to do this.");
      }
      try {
        // Create an update object based on provided fields
        let updateObj = {};
        if (firstName) updateObj.firstName = firstName;
        if (lastName) updateObj.lastName = lastName;
        if (email) updateObj.email = email;
        if (schoolInput) {
          updateObj.school = {
            name: schoolInput.name,
            phone: schoolInput.phone,
            address: {
              street1: schoolInput.address.street1,
              street2: schoolInput.address.street2,
              city: schoolInput.address.city,
              state: schoolInput.address.state,
              zip: schoolInput.address.zip,
            }
          };
        }

        // Find the member by its _id and update
        const updatedMember = await Member.findByIdAndUpdate(_id, updateObj, { new: true });

        // If no member is found, throw an error
        if (!updatedMember) {
          throw new Error('Member not found');
        }

        // Return the updated member
        return updatedMember;
      } catch (error) {
        console.error("Error updating member:", error);
        throw new Error("Error updating member");
      }
    },
    deleteMember: async (_, { _id }) => {
      if(!context.user) {
        throw new Error("You need to log in to do this.");
      }
      try {
        // Find the member by its _id and delete it
        const deletedMember = await Member.findByIdAndRemove(_id);

        // If no member is found, throw an error
        if (!deletedMember) {
          throw new Error('Member not found');
        }

        // Return the deleted member
        return deletedMember;
      } catch (error) {
        console.error("Error deleting member:", error);
        throw new Error("Error deleting member");
      }
    },
  }
}

export default resolvers;