<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tes extends CI_Controller {
	function __construct()
	{
		parent::__construct();

		$this->load->helper('url');

		$this->_init();
	}

	private function _init()
	{
		$this->output->set_template('ubolds');

		$this->load->js('assets/themes/default/js/jquery-1.9.1.min.js');
		$this->load->js('assets/themes/default/hero_files/bootstrap-transition.js');
		$this->load->js('assets/themes/default/hero_files/bootstrap-collapse.js');
	}

	public function index()
	{
		// if (!$this->ion_auth->logged_in())
		// {
		// 	// redirect them to the login page
		// 	redirect('auth/login', 'refresh');
		// }
		// else if (!$this->ion_auth->is_admin()) // remove this elseif if you want to enable this for non-admins
		// {
		// 	// redirect them to the home page because they must be an administrator to view this
		// 	show_error('You must be an administrator to view this page.');
		// }
		// else
		// {

        //     // $this->db->join('tb_santri', 'tb_kepengelolaan.pejabat = tb_santri.id_santri', 'left');
        //     // $this->db->join('tb_jabatan', 'tb_kepengelolaan.jabatan = tb_jabatan.id_jabatan', 'left');
        //     // $this->db->where('nama_jabatan', 'Ketua Harian');
        //     // $data['ketua'] = $this->db->get('tb_kepengelolaan');
        //     $sql = "SELECT * FROM `tb_kepengelolaan` 
        //             LEFT JOIN `tb_santri` ON `tb_kepengelolaan`.`pejabat` = `tb_santri`.`id_santri` 
        //             LEFT JOIN `tb_jabatan` ON `tb_kepengelolaan`.`jabatan` = `tb_jabatan`.`id_jabatan` ";
            
        //     $queryketua = $this->db->query($sql . " WHERE nama_jabatan = 'Ketua Harian' and status='Aktif Menjabat'");
        //     $data['santri'] = $this->db->get('tb_santri');
            
        //     $data['project'] = $this->db->get('tb_project', 5);
        //     $data['jumlah_project'] = $this->db->get('tb_project')->num_rows();
        //     $this->db->join('tb_santri', 'tb_santri.id_santri = tb_projectsantri.santri', 'left');
        //     $data['santri_project'] = $this->db->get('tb_projectsantri');
            
        //     $row = $queryketua->row();

        //     if (isset($row))
        //     {
        //         $data['nama_ketua'] =  $row->nama_lengkap_santri;
        //         $data['foto_ketua'] =  $row->foto_santri;
        //     }
		// 	$this->load->view('welcome_message', $data);
		// }
			$this->load->view('tes');


	}
}
