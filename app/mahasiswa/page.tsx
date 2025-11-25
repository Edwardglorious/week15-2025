import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function MahasiswaPage() {
  const dataMahasiswa = await prisma.mahasiswa.findMany();

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Daftar Mahasiswa</h1>
      <ul>
        {dataMahasiswa.map((mhs) => (
          <li key={mhs.id} style={{ marginBottom: '10px' }}>
            <strong>{mhs.nama}</strong> - {mhs.jurusan}
          </li>
        ))}
      </ul>
    </div>
  );
}