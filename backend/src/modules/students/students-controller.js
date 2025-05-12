const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    console.log("checked that user");
    const students = await getAllStudents(req);
    res.json({students});

});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    try {
        const result = await addNewStudent(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }


});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
   const message = await updateStudent(req);
   res.json({message});
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const {id} = req.params;
    const student = await getStudentDetail(id);
    res.json({student});


});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    const message  = await setStudentStatus(req.body);
    res.json({message});


});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
