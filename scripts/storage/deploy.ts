import { STORAGE_DOCS_PATH } from '../config';
import { createArchive, uploadToS3, vlog } from '../utils';

export default async function deploy(task) {
  task.output = 'Creating Archive';
  const zipPath = await createArchive('storage', [STORAGE_DOCS_PATH]);
  task.output = 'Uploading Archive to S3';
  return uploadToS3(zipPath);
}
