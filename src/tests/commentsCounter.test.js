import commentsCount from '../counterFunctions/commentsCounter';

describe('testing comments counter function', () => {
  it('should count the comments inside the given data array', () => {
    // Arrange
    const arr = [
      {
        userName: 'Kashif',
        comment: 'This show is amazing',
      },
      {
        userName: 'Max',
        comment: 'Who is the main lead Actor in this show',
      },
      {
        userName: 'Tom',
        comment: 'I would like to watch this show soon',
      },
    ];
    // Act
    const result = commentsCount(arr);
    const expectedResult = 3;
    // Assert
    expect(result).toBe(expectedResult);
  });
  it('Empty array should result 0 number', () => {
    // Arrange
    const arr = [];
    // Act
    const result = commentsCount(arr);
    const expectedResult = 0;
    // Assert
    expect(result).toBe(expectedResult);
  });
  it('should return the length of the given array', () => {
    // Arrange
    const arr = [
      {
        userName: 'Tolkien',
        comment: 'This show is amazing',
      },
      {
        userName: 'Rollin',
        comment: 'Who is the main lead Actor in this show',
      },
      {
        userName: 'Smith',
        comment: 'I would like to watch this show soon',
      },
      {
        userName: 'Tommy',
        comment: 'The best show ever',
      },
    ];
    // Act
    const result = commentsCount(arr);
    const expectedResult = arr.length;
    // Assert
    expect(result).toBe(expectedResult);
  });
});
