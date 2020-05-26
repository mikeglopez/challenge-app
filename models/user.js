class User {
  constructor(
    id,
    email,
    name,
    imageUrl,
    location,
    mob,
    sex,
    bio,
    createdAt,
    expiresAt
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.imageUrl = imageUrl;
    this.location = location;
    this.mob = mob;
    this.sex = sex;
    this.bio = bio;
    this.createdAt = createdAt;
    this.expiresAt = expiresAt;
  }
}

export default User;
