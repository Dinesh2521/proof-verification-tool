var assert = require('assert');
var request = require('sync-request');
var xmlParse = require('xml2js');

const kernelId = 'aki-503e7402';
const snapshotIdV1Main = 'snap-cdd399f8';
const snapshotIdV1Sig = 'snap-00083b35';
const imageIDV1Main = 'ami-5e39040c';
const imageIDV1Sig = 'ami-88724fda';
const snapshotIdV2 = 'snap-2c1fab9b';
const imageIdV2 = 'ami-15192302';

var exports = module.exports = {};

const oraclize4 = {
	name: 'oraclize4',
	main: {
		IP: '52.221.246.106',
		port: '10011',
		DI: 'https://ec2.ap-southeast-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeInstances&Expires=2018-01-01&InstanceId=i-e1ae5746&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=IHvmNvRC0KTtoZ4JN8e3YbtcjuOgDkBH1cHV%2BNQMewg%3D',
		DV: 'https://ec2.ap-southeast-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeVolumes&Expires=2018-01-01&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&VolumeId=vol-72196daf&Signature=OVw4KfRyjOCVyhS6Icq6QRSQXIZ6OF3JCIc7W%2BB1yRE%3D',
		GCO: 'https://ec2.ap-southeast-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=GetConsoleOutput&Expires=2018-01-01&InstanceId=i-e1ae5746&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=lYJxdvVWWT6grbF782emRbJNAK7QzNmXXlacGHS0CIc%3D',
		GU: 'https://iam.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=GetUser&Expires=2018-01-01&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2010-05-08&Signature=72kIbKEhCgnXpenvG8oZLzxRdsnxXzOKGafOeTDddxM%3D',
		DIA: 'https://ec2.ap-southeast-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeInstanceAttribute&Attribute=userData&Expires=2018-01-01&InstanceId=i-e1ae5746&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=%2BoDSwuhchgC%2FAMPONQkXCHbQ4c1ygs%2FMPk2XcqPt2Ns%3D',
		instanceId: 'i-e1ae5746'
	},
	sig: {
		IP: '54.169.251.103',
		port: '10011',
		DI: 'https://ec2.ap-southeast-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeInstances&Expires=2018-01-01&InstanceId=i-d5ae5772&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=SEandr%2FcprAmz9yBXTS3fRU3c4P8qz%2Bsfhb5Qvjdats%3D',
		DV: 'https://ec2.ap-southeast-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeVolumes&Expires=2018-01-01&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&VolumeId=vol-b1196d6c&Signature=qQsOLXgA2QwttVjMCFNKWxkrO4Wo%2BKoXIBaAf36dFi8%3D',
		GCO: 'https://ec2.ap-southeast-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=GetConsoleOutput&Expires=2018-01-01&InstanceId=i-d5ae5772&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=b2h%2BqNXgABuvXFDCW1k8yjjop64yHaPEqxIK2uBIK6Y%3D',
		GU: 'https://iam.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=GetUser&Expires=2018-01-01&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2010-05-08&Signature=72kIbKEhCgnXpenvG8oZLzxRdsnxXzOKGafOeTDddxM%3D',
		DIA: 'https://ec2.ap-southeast-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeInstanceAttribute&Attribute=userData&Expires=2018-01-01&InstanceId=i-d5ae5772&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=rXm1c%2B32cSVnYlOX6nbBv%2Bj%2BcaylYs1yOYmya27J7u0%3D',
		instanceId: 'i-d5ae5772',
		modulus: [184, 227, 99, 146, 69, 62, 141, 20, 30, 88, 188, 11, 237, 71, 195, 149, 181, 32, 127, 85, 139, 227, 98, 235, 88, 15, 233, 61, 66, 37, 239, 94, 9, 9, 2, 57, 254, 6, 175, 9, 238, 0, 32, 182, 42, 7, 126, 169, 155, 188, 1, 126, 41, 108, 90, 109, 82, 93, 88, 119, 29, 214, 57, 19, 240, 93, 54, 67, 147, 25, 211, 110, 29, 184, 235, 87, 120, 213, 20, 175, 71, 4, 211, 48, 53, 186, 221, 57, 229, 37, 172, 170, 139, 142, 53, 244, 171, 179, 189, 172, 170, 123, 149, 181, 59, 116, 161, 178, 123, 172, 162, 120, 91, 137, 199, 170, 238, 195, 15, 237, 216, 78, 233, 123, 162, 220, 82, 79, 118, 170, 19, 146, 208, 153, 152, 42, 85, 193, 169, 92, 103, 55, 255, 79, 14, 209, 153, 253, 57, 193, 116, 127, 124, 216, 150, 239, 225, 56, 93, 102, 252, 12, 94, 182, 240, 233, 19, 242, 121, 59, 137, 223, 195, 238, 185, 239, 129, 178, 219, 252, 165, 187, 150, 54, 242, 112, 17, 96, 254, 47, 132, 224, 138, 167, 251, 163, 20, 191, 240, 81, 173, 118, 48, 4, 221, 20, 117, 54, 104, 53, 228, 48, 97, 107, 138, 198, 56, 127, 123, 191, 14, 122, 227, 244, 97, 182, 3, 185, 155, 96, 99, 250, 93, 13, 210, 22, 234, 183, 154, 228, 214, 252, 12, 46, 78, 203, 234, 62, 174, 149, 131, 192, 65, 2, 107, 225, 84, 51, 86, 148, 2, 22, 70, 102, 34, 33, 212, 60, 101, 246, 34, 162, 38, 39, 2, 14, 212, 111, 225, 254, 179, 1, 247, 230, 205, 213, 245, 113, 49, 159, 23, 193, 135, 63, 203, 141, 124, 45, 205, 121, 80, 122, 238, 30, 79, 18, 81, 39, 83, 212, 147, 1, 36, 75, 194, 206, 216, 98, 201, 241, 56, 95, 222, 135, 42, 205, 47, 136, 141, 202, 231, 243, 47, 188, 116, 211, 187, 35, 59, 16, 223, 217, 212, 243, 2, 41, 36, 196, 192, 204, 171, 131, 54, 238, 198, 179, 142, 0, 185, 215, 227, 232, 193, 240, 162, 81, 202, 243, 42, 243, 225, 65, 31, 39, 140, 122, 98, 22, 245, 227, 247, 219, 193, 68, 216, 45, 225, 124, 24, 170, 203, 244, 180, 179, 19, 239, 57, 107, 82, 239, 211, 247, 175, 190, 109, 222, 187, 34, 65, 133, 100, 197, 213, 13, 241, 58, 151, 157, 224, 166, 11, 138, 102, 106, 182, 30, 74, 172, 154, 148, 45, 95, 203, 56, 78, 27, 168, 37, 128, 151, 72, 235, 186, 51, 34, 209, 141, 231, 4, 168, 135, 29, 95, 45, 145, 34, 94, 127, 198, 49, 194, 119, 121, 160, 165, 104, 48, 183, 202, 157, 176, 86, 152, 108, 45, 181, 197, 152, 117, 97, 144, 232, 166, 103, 104, 135, 142, 163, 174, 100, 28, 45, 205, 79, 38, 154, 238, 130, 17, 189, 129, 97, 248, 210, 1, 198, 100, 67, 144, 184, 56, 17]
	}
};

var oraclize5 = {
	name: 'oraclize5',
	main: {
		IP: '52.90.90.9',
		port: '10011',
		DI: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeInstances&Expires=2019-01-01&InstanceId=i-006259213b8edb2ce&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=H4zPn42aYytRSe3NOyJoqhPCTxxtohMZwg8q8xszvq8%3D',
		DV: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeVolumes&Expires=2019-01-01&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&VolumeId=vol-02247b60d940968cd&Signature=mcWgNdX0nu7kJ45kg6LdYRJCLp0FK0s7hlXyV1fnfSM%3D',
		GCO: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=GetConsoleOutput&Expires=2019-01-01&InstanceId=i-006259213b8edb2ce&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=pXCXcdfJXwiVsyaClr2j4IBF0pS%2BHDKMTl2hnELIvCY%3D',
		GU: 'https://iam.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=GetUser&Expires=2019-01-01&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2010-05-08&Signature=P7KohfMsstvrdvsDZVsaC1vWWnXgPUT9d2%2B0AdrOC0A%3D',
		DIA: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeInstanceAttribute&Attribute=userData&Expires=2019-01-01&InstanceId=i-006259213b8edb2ce&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=bOqAqVojguvycC6CjMwNCqf7WT7My0obbeONS99nbJU%3D',
		instanceId: 'i-006259213b8edb2ce'
	},
	sig: {
		modulus: [186, 207, 38, 201, 153, 246, 95, 38, 213, 220, 154, 136, 124, 73, 92, 13, 234, 97, 118, 163, 232, 135, 219, 154, 47, 207, 195, 46, 79, 84, 168, 200, 75, 11, 201, 149, 58, 101, 232, 67, 46, 131, 163, 245, 10, 230, 184, 60, 90, 156, 201, 203, 175, 4, 176, 74, 108, 188, 15, 44, 214, 129, 96, 74, 80, 109, 57, 119, 221, 70, 46, 219, 89, 137, 147, 59, 221, 66, 178, 45, 154, 144, 189, 85, 35, 69, 219, 59, 167, 243, 214, 174, 28, 102, 114, 195, 210, 190, 30, 130, 141, 114, 0, 227, 163, 163, 247, 248, 101, 234, 123, 212, 23, 13, 88, 199, 234, 185, 243, 115, 121, 157, 104, 233, 105, 28, 248, 26, 76, 123, 178, 232, 95, 50, 7, 158, 246, 81, 241, 144, 46, 9, 73, 216, 83, 80, 48, 175, 119, 232, 7, 145, 80, 24, 223, 107, 73, 22, 155, 176, 217, 244, 148, 42, 75, 112, 113, 91, 45, 112, 123, 174, 88, 213, 106, 20, 177, 216, 130, 229, 24, 5, 22, 241, 159, 34, 124, 215, 243, 34, 120, 94, 183, 40, 97, 163, 28, 65, 156, 170, 156, 111, 226, 155, 134, 168, 111, 209, 67, 109, 64, 28, 208, 224, 199, 224, 167, 17, 74, 3, 56, 253, 79, 53, 132, 60, 68, 162, 184, 190, 249, 216, 180, 191, 1, 253, 40, 170, 45, 108, 225, 212, 29, 42, 53, 4, 95, 158, 233, 240, 95, 132, 223, 88, 121, 95, 14, 227, 149, 51, 214, 250, 190, 54, 79, 255, 188, 170, 57, 152, 108, 235, 221, 1, 145, 156, 107, 183, 60, 89, 28, 36, 50, 72, 221, 182, 213, 112, 144, 11, 236, 225, 185, 159, 43, 90, 130, 245, 59, 65, 254, 25, 123, 208, 118, 99, 233, 66, 159, 165, 155, 158, 6, 101, 77, 200, 63, 77, 181, 10, 202, 26, 39, 85, 245, 18, 89, 95, 46, 164, 32, 55, 50, 66, 215, 176, 56, 156, 91, 26, 125, 140, 182, 145, 143, 235, 74, 208, 148, 60, 239, 74, 27, 76, 15, 3, 115, 223, 42, 11, 182, 100, 152, 125, 159, 234, 173, 177, 106, 204, 242, 188, 99, 190, 150, 23, 69, 58, 85, 16, 179, 95, 225, 28, 127, 245, 27, 111, 181, 51, 227, 247, 108, 120, 115, 145, 120, 167, 220, 126, 168, 235, 26, 55, 247, 18, 221, 196, 47, 11, 168, 146, 212, 165, 210, 45, 14, 237, 195, 0, 160, 57, 3, 118, 156, 176, 199, 156, 188, 213, 238, 97, 218, 124, 218, 92, 215, 75, 13, 164, 161, 156, 139, 68, 23, 133, 21, 59, 66, 114, 237, 170, 237, 124, 68, 122, 123, 20, 106, 18, 13, 223, 166, 120, 53, 33, 229, 124, 153, 143, 109, 181, 207, 203, 96, 26, 136, 10, 159, 18, 159, 62, 130, 95, 79, 237, 249, 163, 99, 146, 183, 247, 12, 224, 97, 155, 24, 130, 227, 215, 38, 152, 127, 1, 237, 92, 15, 185, 165, 11, 8, 91]
	}
};

var oraclize6 = {
	name: 'oraclize6',
	main: {
		IP: '54.226.2.137',
		port: '10011',
		DI: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeInstances&Expires=2019-01-01&InstanceId=i-0441b1549e6dd7a56&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=F6aqDDAYomEltO3JCP%2FdVOr0r%2FoqaR%2FfUhFholQa9vw%3D',
		DV: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeVolumes&Expires=2019-01-01&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&VolumeId=vol-0c91fe09ff8945ba5&Signature=T9VHwfNi2KAa34aQFAyaSamulTESrg1OUk70aWujG4I%3D',
		GCO: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=GetConsoleOutput&Expires=2019-01-01&InstanceId=i-0441b1549e6dd7a56&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=06WHUv5JE1w%2BpOmnel5uDYFAzeYi%2BpoDxaRYhnVgEtU%3D',
		GU: 'https://iam.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=GetUser&Expires=2019-01-01&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2010-05-08&Signature=P7KohfMsstvrdvsDZVsaC1vWWnXgPUT9d2%2B0AdrOC0A%3D',
		DIA: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeInstanceAttribute&Attribute=userData&Expires=2019-01-01&InstanceId=i-0441b1549e6dd7a56&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=I95C8Efx9gE9AnRcpAQ1fmm7sl4rAwcCnQWitYvCxsA%3D',
		instanceId: 'i-0441b1549e6dd7a56'
	},
	sig: {
		modulus: [224, 17, 214, 115, 152, 207, 24, 236, 145, 65, 236, 182, 219, 189, 122, 202, 216, 127, 25, 94, 166, 20, 144, 152, 99, 19, 144, 106, 55, 250, 82, 151, 23, 209, 164, 246, 45, 129, 204, 253, 239, 144, 114, 126, 48, 243, 30, 129, 186, 65, 118, 213, 21, 206, 146, 83, 1, 108, 185, 63, 235, 98, 207, 212, 166, 34, 164, 99, 21, 185, 204, 117, 17, 80, 88, 188, 23, 51, 159, 220, 106, 222, 10, 96, 195, 36, 175, 45, 221, 31, 179, 127, 139, 171, 243, 128, 107, 126, 108, 168, 116, 171, 94, 102, 116, 139, 160, 89, 71, 92, 72, 106, 241, 193, 140, 211, 114, 112, 5, 88, 138, 27, 232, 4, 229, 67, 167, 149, 112, 94, 246, 135, 55, 78, 249, 169, 52, 40, 85, 206, 71, 48, 165, 147, 59, 229, 177, 66, 144, 71, 26, 42, 201, 181, 36, 190, 143, 90, 242, 211, 30, 147, 17, 183, 204, 43, 158, 149, 232, 65, 240, 181, 65, 209, 198, 70, 81, 156, 153, 83, 187, 96, 73, 249, 238, 139, 43, 110, 90, 253, 232, 234, 158, 17, 89, 200, 159, 72, 114, 130, 233, 162, 56, 96, 182, 129, 116, 207, 186, 185, 8, 165, 204, 235, 239, 196, 123, 250, 168, 73, 156, 209, 225, 174, 167, 181, 106, 248, 181, 103, 32, 110, 46, 122, 44, 33, 30, 72, 179, 242, 33, 246, 4, 244, 132, 51, 174, 180, 10, 210, 252, 207, 31, 143, 206, 155, 139, 13, 131, 116, 75, 154, 29, 204, 217, 24, 161, 46, 77, 204, 10, 79, 183, 186, 114, 8, 85, 51, 110, 177, 37, 243, 65, 228, 78, 132, 111, 205, 156, 155, 150, 4, 201, 82, 22, 138, 59, 91, 89, 35, 108, 201, 91, 215, 43, 94, 115, 214, 170, 239, 73, 133, 221, 242, 157, 176, 85, 132, 36, 200, 141, 251, 130, 235, 12, 69, 39, 221, 230, 59, 207, 118, 180, 91, 13, 67, 38, 105, 160, 45, 25, 93, 214, 68, 6, 230, 72, 149, 120, 33, 143, 40, 16, 200, 83, 184, 22, 75, 190, 173, 206, 189, 203, 126, 204, 243, 56, 43, 76, 94, 12, 255, 1, 116, 250, 251, 36, 160, 255, 206, 228, 13, 84, 229, 98, 86, 201, 102, 32, 42, 35, 248, 127, 158, 88, 46, 245, 44, 113, 81, 251, 186, 20, 165, 137, 248, 73, 206, 41, 45, 195, 119, 164, 213, 71, 150, 88, 51, 188, 48, 91, 218, 76, 14, 227, 42, 250, 203, 254, 155, 246, 72, 81, 160, 29, 74, 58, 176, 146, 30, 78, 108, 218, 42, 238, 105, 123, 161, 117, 1, 169, 82, 149, 246, 132, 110, 168, 192, 34, 85, 64, 13, 141, 18, 141, 239, 212, 202, 108, 30, 4, 102, 17, 105, 44, 241, 41, 191, 244, 80, 251, 184, 92, 110, 144, 92, 66, 81, 211, 40, 249, 210, 32, 199, 199, 66, 226, 67, 4, 95, 12, 173, 103, 179, 201, 157, 46, 135, 166, 214, 28, 159]
	}
};

var oraclize7 = {
	name: 'oraclize7',
	main: {
		IP: '52.207.238.28',
		port: '10011',
		DI: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeInstances&Expires=2019-01-01&InstanceId=i-06ab1aa0a097cc3cf&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=Eg3MXnJlrPu8JqcFwLfUCNq%2BfEG76or7JAjSLFlUIZM%3D',
		DV: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeVolumes&Expires=2019-01-01&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&VolumeId=vol-00db8493781c33e4d&Signature=rSuyO51LFJLFSOMzePh4Y40X5aXg8eVKH8kWE4RPi5I%3D',
		GCO: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=GetConsoleOutput&Expires=2019-01-01&InstanceId=i-06ab1aa0a097cc3cf&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=nt%2FJpcDH3QTJF%2B%2BUJ5qukQeVyi%2F%2F79FbcOdGTaAhUF0%3D',
		GU: 'https://iam.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=GetUser&Expires=2019-01-01&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2010-05-08&Signature=P7KohfMsstvrdvsDZVsaC1vWWnXgPUT9d2%2B0AdrOC0A%3D',
		DIA: 'https://ec2.us-east-1.amazonaws.com/?AWSAccessKeyId=AKIAI7NVQ33GYQCJDJKA&Action=DescribeInstanceAttribute&Attribute=userData&Expires=2019-01-01&InstanceId=i-06ab1aa0a097cc3cf&SignatureMethod=HmacSHA256&SignatureVersion=2&Version=2014-10-01&Signature=lMJv89gkaWH%2FfqdYfYePGtjneUyxsMH17I%2BaDLT8rww%3D',
		instanceId: 'i-06ab1aa0a097cc3cf'
	},
	sig: {
		modulus: [221, 152, 239, 128, 69, 115, 173, 154, 77, 113, 242, 54, 167, 45, 26, 123, 181, 145, 27, 78, 190, 10, 129, 131, 243, 240, 241, 184, 235, 207, 243, 184, 55, 213, 9, 214, 132, 240, 150, 48, 25, 222, 193, 69, 202, 204, 176, 179, 48, 174, 35, 72, 184, 211, 77, 195, 10, 40, 17, 7, 90, 160, 172, 246, 36, 64, 35, 201, 133, 103, 127, 47, 1, 205, 90, 195, 66, 78, 228, 55, 249, 252, 214, 232, 80, 47, 110, 212, 9, 23, 254, 77, 185, 223, 214, 242, 234, 69, 133, 23, 238, 252, 101, 47, 66, 164, 2, 212, 147, 22, 84, 34, 188, 168, 244, 99, 182, 3, 110, 206, 193, 85, 27, 247, 62, 49, 26, 77, 48, 240, 169, 153, 249, 127, 152, 155, 123, 245, 53, 35, 137, 42, 90, 178, 164, 170, 183, 37, 76, 129, 103, 108, 109, 179, 252, 15, 172, 249, 148, 234, 142, 145, 115, 230, 119, 146, 12, 220, 98, 116, 53, 103, 113, 114, 58, 229, 3, 205, 254, 180, 4, 141, 195, 213, 5, 178, 51, 215, 11, 65, 69, 176, 91, 104, 119, 191, 196, 11, 202, 184, 217, 243, 33, 151, 40, 64, 158, 42, 193, 57, 126, 21, 133, 189, 118, 52, 249, 247, 238, 100, 145, 165, 21, 87, 124, 75, 236, 80, 211, 37, 48, 249, 43, 119, 129, 248, 161, 11, 186, 60, 94, 136, 43, 198, 163, 194, 57, 122, 212, 39, 18, 82, 243, 14, 27, 165, 140, 97, 209, 124, 31, 253, 136, 125, 243, 184, 216, 78, 231, 119, 247, 210, 222, 208, 172, 59, 28, 245, 171, 27, 4, 177, 49, 213, 190, 244, 111, 252, 80, 104, 95, 5, 97, 124, 203, 84, 192, 162, 13, 76, 224, 44, 33, 98, 234, 136, 237, 72, 138, 33, 230, 18, 20, 162, 106, 17, 70, 159, 213, 223, 224, 104, 255, 224, 80, 96, 83, 174, 205, 208, 21, 105, 111, 205, 1, 232, 155, 210, 243, 63, 12, 20, 181, 140, 233, 220, 67, 117, 133, 45, 74, 147, 22, 31, 235, 209, 217, 157, 91, 110, 1, 202, 64, 35, 98, 202, 228, 78, 162, 34, 77, 167, 246, 4, 195, 79, 129, 24, 153, 135, 244, 149, 217, 86, 244, 18, 190, 217, 26, 6, 13, 129, 245, 229, 242, 89, 79, 124, 151, 86, 31, 37, 249, 105, 166, 48, 54, 207, 22, 68, 84, 39, 4, 192, 111, 78, 70, 132, 161, 199, 106, 224, 99, 252, 207, 155, 30, 26, 55, 5, 154, 147, 97, 209, 5, 79, 42, 49, 7, 196, 230, 9, 43, 58, 103, 71, 109, 15, 8, 49, 47, 229, 189, 22, 166, 240, 92, 227, 63, 44, 51, 135, 9, 110, 164, 220, 113, 21, 92, 98, 84, 53, 191, 113, 63, 244, 167, 230, 104, 212, 218, 5, 113, 63, 71, 136, 86, 210, 107, 48, 183, 63, 138, 131, 232, 31, 156, 229, 157, 97, 42, 200, 135, 89, 73, 183, 38, 226, 228, 35, 98, 95]
	}
};

// There can be potentially multiple oracles to choose from
exports.servers = new Array(1);
// 1st index denotes the tlsn proof version
exports.servers.push([oraclize4]);
exports.servers.push([oraclize5, oraclize6, oraclize7]);

function getJSON(res) {
	return JSON.parse(JSON.stringify(parseSync(res.getBody('utf8'))));
}

exports.validateServer = function (server, type, mainPubKey) {
	try {
		var notaryServer;
		if (type === 'sig') {
			notaryServer = server.sig;
		} else {
			notaryServer = server.main;
		}
		var res = request('GET', notaryServer.DI);
		if (res.statusCode !== 200) {
			throw new Error('aws_request_failed');
		}
		var json = getJSON(res);
		var args = checkDescribeInstances(json.DescribeInstancesResponse, notaryServer.instanceId, notaryServer.IP, type);

		res = request('GET', notaryServer.DV);
		if (res.statusCode !== 200) {
			throw new Error('aws_request_failed');
		}
		json = getJSON(res);
		checkDescribeVolumes(json.DescribeVolumesResponse, notaryServer.instanceId, args.volumeId, args.volAttachTime, type);
		res = request('GET', notaryServer.GU);
		if (res.statusCode !== 200) {
			throw new Error('aws_request_failed');
		}
		json = getJSON(res);
		checkGetUser(json.GetUserResponse.GetUserResult, args.ownerId);

		res = request('GET', notaryServer.GCO);
		if (res.statusCode !== 200) {
			throw new Error('aws_request_failed');
		}
		json = getJSON(res);
		var pubKey = checkGetConsoleOutput(json.GetConsoleOutputResponse, notaryServer.instanceId, args.launchTime, type, mainPubKey);

		res = request('GET', notaryServer.DIA);
		json = getJSON(res);
		checkDescribeInstanceAttribute(json.DescribeInstanceAttributeResponse, notaryServer.instanceId);
		// Check for v1
		if (type !== 'main') {
			assert(getModulusFromPubKey(pubKey).toString() === server.sig.modulus.toString());
		}

		var mark = 'AWSAccessKeyId=';
		var start;
		var id;
		var ids = [];
		// "AWSAccessKeyId" should be the same to prove that the queries are made on behalf of AWS user "root".
		// The attacker can be a user with limited privileges for whom the API would report only partial information.
		var urlArray = [notaryServer.DI, notaryServer.DV, notaryServer.GU, notaryServer.GCO, notaryServer.DIA];
		for (const url of urlArray) {
			start = url.search(mark) + mark.length;
			id = url.slice(start, start + url.slice(start).search('&'));
			ids.push(id);
		}
		assert(new Set(ids).size === 1);
		return pubKey;
	} catch (err) {
		throw new Error(err.message);
	}
};

function parseSync(xml) {
	var error = null;
	var json = null;
	xmlParse.parseString(xml, function (innerError, innerJson) {
		error = innerError;
		json = innerJson;
	});

	if (error) {
		throw error;
	}

	if (!error && !json) {
		throw new Error('The callback was suddenly async or something.');
	}
	return json;
}

// assuming both events happened on the same day, get the time
// difference between them in seconds
// the time string looks like "2015-04-15T19:00:59.000Z"
function getSecondsDelta(later, sooner) {
	assert(later.length === 24);
	if (later.slice(0, 11) !== sooner.slice(0, 11)) {
		return 999999; // not on the same day
	}
	var laterTime = later.slice(11, 19).split(':');
	var soonerTime = sooner.slice(11, 19).split(':');
	var laterSecs = (parseInt(laterTime[0], 10) * 3600) + (parseInt(laterTime[1], 10) * 60) + parseInt(laterTime[2], 10);
	var soonerSecs = (parseInt(soonerTime[0], 10) * 3600) + (parseInt(soonerTime[1], 10) * 60) + parseInt(soonerTime[2], 10);
	return laterSecs - soonerSecs;
}

function getModulusFromPubKey(pemPubKey) {
	var b64Str = '';
	var lines = pemPubKey.split('\n');
	// omit header and footer lines
	for (var i = 1; i < (lines.length - 1); i++) {
		b64Str += lines[i];
	}
	var der = b64decode(b64Str);
	// last 5 bytes are 2 DER bytes and 3 bytes exponent, our  is the preceding 512 bytes
	var pubkey = der.slice(der.length - 517, der.length - 5);
	return pubkey;
}

function checkDescribeInstances(jsonInput, instanceId, IP, type) {
	try {
		var imageId;

		switch (type) {
			case 'main':
				imageId = imageIDV1Main;
				break;
			case 'sig':
				imageId = imageIDV1Sig;
				break;
			default:
				imageId = imageIdV2;
		}
		var reservationSet = jsonInput.reservationSet;
		var ownerId = reservationSet[0].item[0].ownerId.toString();
		var instancesSet = reservationSet[0].item[0].instancesSet;
		assert(Object.keys(instancesSet).length === 1);
		var currentInstance = instancesSet[0].item[0];
		assert(currentInstance.instanceId.toString() === instanceId);
		assert(currentInstance.imageId.toString() === imageId);
		assert(currentInstance.instanceState[0].name.toString() === 'running');
		assert(currentInstance.ipAddress.toString() === IP);
		assert(currentInstance.rootDeviceType.toString() === 'ebs');
		assert(currentInstance.rootDeviceName.toString() === '/dev/xvda');

		// Verify only for TLSNotary Proofs v1
		if ((type === 'main') || (type === 'sig')) {
			assert(currentInstance.kernelId.toString() === kernelId);
		}

		var devices = currentInstance.blockDeviceMapping;
		assert(Object.keys(devices).length === 1);
		var device = devices[0].item[0];
		assert(device.deviceName.toString() === '/dev/xvda');
		assert(device.ebs[0].status.toString() === 'attached');
		var volAttachTime = device.ebs[0].attachTime.toString();
		var volumeId = device.ebs[0].volumeId.toString();
		var launchTime = currentInstance.launchTime.toString();
		// Get seconds from "2015-04-15T19:00:59.000Z"
		assert(getSecondsDelta(volAttachTime, launchTime) <= 3);
		if ((type !== 'main') && (type !== 'sig')) {
			assert(currentInstance.virtualizationType.toString() === 'hvm');
		}
		return {ownerId: ownerId, volumeId: volumeId, volAttachTime: volAttachTime, launchTime: launchTime};
	} catch (err) {
		console.log('checkDescribeInstances failed', err.stack);
		throw new Error('checkDescribeInstances_failed');
	}
}

function checkDescribeVolumes(json, instanceId, volumeId, volAttachTime, type) {
	try {
		var snapshotId;

		switch (type) {
			case 'main':
				snapshotId = snapshotIdV1Main;
				break;
			case 'sig':
				snapshotId = snapshotIdV1Sig;
				break;
			default:
				snapshotId = snapshotIdV2;
		}
		var volumes = json.volumeSet;
		assert(Object.keys(volumes).length === 1);

		var volume = volumes[0].item[0];
		assert(volume.volumeId.toString() === volumeId);
		assert(volume.snapshotId.toString() === snapshotId);
		assert(volume.status.toString() === 'in-use');

		var volCreateTime = volume.createTime.toString();
		var attachedVolumes = volume.attachmentSet;
		assert(Object.keys(attachedVolumes).length === 1);
		var attVolume = attachedVolumes[0].item[0];
		assert(attVolume.volumeId.toString() === volumeId);
		assert(attVolume.instanceId.toString() === instanceId);
		assert(attVolume.device.toString() === '/dev/xvda');
		assert(attVolume.status.toString() === 'attached');
		var attTime = attVolume.attachTime.toString();
		assert(volAttachTime === attTime);
		// Crucial: volume was created from snapshot and attached at the same instant
		// currentInstance guarantees that there was no time window to modify it
		assert(getSecondsDelta(attTime, volCreateTime) === 0);
	} catch (err) {
		console.log('checkDescribeVolumes failed: ', err.stack);
		throw new Error('checkDescribeVolumes_failed');
	}
}

function checkGetConsoleOutput(json, instanceId, launchTime, type, mainPubKey) {
	try {
		assert(json.instanceId.toString() === instanceId);
		var timestamp = json.timestamp.toString();
		// prevent funny business: last consoleLog entry no later than 4 minutes after instance starts

		var consoleOutputB64Encoded = json.output.toString();
		var consoleOutputStr = ba2str(b64decode(consoleOutputB64Encoded));
		if ((type === 'main') || (type === 'sig')) {
			// no other string starting with xvd except for xvda
			assert(consoleOutputStr.search(/xvd[^a]/g) === -1);
			assert(getSecondsDelta(timestamp, launchTime) <= 240);
		} else {
			assert(getSecondsDelta(timestamp, launchTime) <= 300);
		}

		var pubKey;
		var beginMark = '';
		switch (type) {
			case 'main':
				beginMark = consoleOutputStr.search('TLSNotary main server pubkey which is embedded into the signing server:');
				assert(beginMark !== -1);
				pubKey = getPubKeyFromOutput(consoleOutputStr, beginMark);
				assert(pubKey.length > 0);
				break;
			case 'sig':
				beginMark = consoleOutputStr.search('TLSNotary siging server pubkey:');
				assert(beginMark !== -1);
				pubKey = getPubKeyFromOutput(consoleOutputStr, beginMark);
				assert(pubKey.length > 0);
				// beginMark = consoleOutputStr.search('TLSNotary imported main server pubkey:');
				// assert(beginMark !== -1);
				// var importedPubKey = getPubKeyFromOutput(consoleOutputStr, beginMark);
				// assert(mainPubKey === pubKey);
				break;
			default:
				beginMark = consoleOutputStr.search('PageSigner public key for verification');
				assert(beginMark !== -1);
				pubKey = getPubKeyFromOutput(consoleOutputStr, beginMark);
				assert(pubKey.length > 0);
		}

		return pubKey;
	} catch (err) {
		console.log('checkGetConsoleOutput failed: ', err.stack);
		throw new Error('checkGetConsoleOutput_failed');
	}
}

function getPubKeyFromOutput(consoleOutputStr, beginMark) {
	const pubKeyBeginMark = '-----BEGIN PUBLIC KEY-----';
	const pubKeyEndMark = '-----END PUBLIC KEY-----';

	var pubKeyBegin = beginMark + consoleOutputStr.slice(beginMark).search(pubKeyBeginMark);
	var pubKeyEnd = pubKeyBegin + consoleOutputStr.slice(pubKeyBegin).search(pubKeyEndMark) + pubKeyEndMark.length;
	return consoleOutputStr.slice(pubKeyBegin, pubKeyEnd);
}

// "userData" allows to pass an arbitrary script to the instance at launch. It MUST be empty.
// currentInstance is a sanity check because the instance is stripped of the code which parses userData.
function checkDescribeInstanceAttribute(json, instanceId) {
	try {
		assert(json.instanceId.toString() === instanceId);
		assert(json.userData.toString() === '');
	} catch (err) {
		console.log('checkDescribeInstanceAttribute failed', err.stack);
		throw new Error('checkDescribeInstanceAttribute_failed');
	}
}

function checkGetUser(json, ownerId) {
	try {
		assert(json[0].User[0].UserId.toString() === ownerId);
		assert(json[0].User[0].Arn.toString().slice(-(ownerId.length + ':root'.length)) === ownerId + ':root');
	} catch (err) {
		console.log('checkGetUser failed', err.stack);
		throw new Error('checkGetUser_failed');
	}
}
