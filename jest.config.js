module.exports = {
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
}
