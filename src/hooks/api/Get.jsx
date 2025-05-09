import { useState, useEffect } from "react";
import axios from "../../axios";
import { processError } from "../../lib/utils";

const useUsers = (url, currentPage = 1) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return { loading, data, pagination };
};
const useSlote = (url, currentPage = 1) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getGetSlots = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}`);
     
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGetSlots();
  }, [currentPage]);

  return { loading, data, pagination };
};
const useAppointment = (url, currentPage = 1) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getAppointments = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}`);
  
      
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAppointments();
  }, [currentPage]);

  return { loading, data, pagination };
};

export { useUsers,useSlote,useAppointment };
