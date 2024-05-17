import express from 'express';

const router=express.Router();


app.get('/api/tools', async (req, res) => {
    try {
      const tools = await Tools.find();
      res.status(200).json(tools);
    } catch (error) {
      res.status(500).json({message:error.message})
      console.log(error)
    }
  })
  
  app.post('/api/tools',async(req,res)=>{
    try {
     const ToolsRegister= await Tools.create(req.body);
     res.status(200).json(ToolsRegister);
    } catch (error) {
      res.status(500).json({message:error.message})
      console.log(error)
    }
  })
  
  app.get('/api/tools/:id', async (req, res) => { 
    try {
      const tools = await Tools.findById(req.params.id);
      res.status(200).json(tools);
    } catch (error) {
      res.status(500).json({message:error.message})
      console.log(error)
    }
  })
  
  app.put('/api/tools/:id', async (req, res) => {
    try {
      const tools = await Tools.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(tools);
    } catch (error) {
      res.status(500).json({message:error.message})
      console.log(error)
    }
  })
  
  app.delete('/api/tools/:id', async (req, res) => {
    try {
      const tools = await Tools.findByIdAndDelete(req.params.id);
      res.status(200).json(tools);
    } catch (error) {
      res.status(500).json({message:error.message})
      console.log(error)
    }
  })