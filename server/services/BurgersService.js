import { fakeDb } from "../db/FakeDB";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class BurgersService {
  delete(id) {
    let value = fakeDb.burgers.find(e => e.id == id)
    if (!value) {
      throw new BadRequest("Invalid Id Casting Failed");
    }
    fakeDb.burgers = fakeDb.burgers.filter(s => s.id !== id)
  }
  create(newBurger) {
    newBurger.id = generateId()
    // other buisness logic

    fakeDb.burgers.push(newBurger)
    return newBurger
  }
  async find(query = {}) {
    // let values = await dbContext.Values.find(query);
    return fakeDb.burgers;
  }
  async findById(id) {
    let value = fakeDb.burgers.find(e => e.id == id)
    if (!value) {
      throw new BadRequest("Invalid Id Casting Failed");
    }
    return value;
  }
}

export const burgersService = new BurgersService();