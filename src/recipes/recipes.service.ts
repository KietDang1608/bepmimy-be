import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipesRepository: Repository<Recipe>,
  ) {}

  create(createRecipeDto: CreateRecipeDto) {
    const recipe = this.recipesRepository.create(createRecipeDto);
    return this.recipesRepository.save(recipe);
  }

  findAll() {
    return this.recipesRepository.find();
  }

  findOne(id: number) {
    return this.recipesRepository.findOne({ where: { id } });
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.recipesRepository.update(id, updateRecipeDto);
  }

  remove(id: number) {
    return this.recipesRepository.delete(id);
  }
}
