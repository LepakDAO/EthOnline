import { InboxOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { AiFillPicture } from 'react-icons/ai'
const { Dragger } = Upload
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info: any) {
    const { status } = info.file

    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
}

export const UploadBox = ({ title }: { title: string }) => (
  <Dragger {...props}>
    <Wrapper>
      <svg
        style={{ margin: '40px 0 15px 0' }}
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.72486 0.130298C3.23707 0.878897 0.64141 3.72951 0.0976124 7.4086C0.00796397 8.01494 -0.0151477 12.477 0.00889674 24.5335C0.0444452 42.3126 -0.000534519 40.9501 0.608245 42.6682C1.29517 44.6068 3.31117 46.7354 5.14725 47.4607C6.75056 48.0941 5.97046 48.0543 17.5034 48.091C25.6432 48.1168 28.2338 48.0934 28.5856 47.9909C29.8848 47.612 30.4498 45.8235 29.6411 44.65C29.4821 44.4194 28.2018 42.6618 26.7959 40.7444C25.3902 38.8271 24.2401 37.2267 24.2403 37.188C24.2405 37.1266 38.9411 17.3389 39.152 17.1161C39.1965 17.069 41.3978 19.7528 44.0438 23.0799L48.8544 29.1295L48.9062 31.3811C48.9572 33.5982 48.9623 33.6396 49.2361 34.076C49.6644 34.7588 50.1711 35.0386 50.979 35.0386C51.7872 35.0386 52.2938 34.7587 52.7219 34.0756L53 33.632V20.4926C53 8.5611 52.9841 7.29282 52.8271 6.69666C52.522 5.53781 52.2229 4.80989 51.7157 3.99301C50.5368 2.09377 49.0138 0.936456 46.7314 0.205256C46.2066 0.0371741 44.5706 0.0206504 26.7791 0.00390788C11.0728 -0.010865 7.27083 0.0130997 6.72486 0.130298ZM46.5392 4.80738C47.4824 5.29958 48.07 5.93328 48.5264 6.95053L48.8544 7.68151L48.8841 13.5906C48.9003 16.8407 48.9003 20.1375 48.8841 20.9171L48.8544 22.3343L44.6879 17.0864C42.3963 14.2001 40.3676 11.7409 40.1796 11.6215C39.7046 11.3199 38.6251 11.3202 38.1425 11.6221C37.9167 11.7634 34.9559 15.6512 29.7058 22.7006C25.2569 28.6739 21.5892 33.5586 21.5553 33.5552C21.5213 33.5518 20.238 31.8272 18.7036 29.7227C16.913 27.2668 15.7808 25.809 15.5426 25.6526C15.0426 25.3243 13.9833 25.3122 13.4751 25.629C13.0872 25.8708 8.48839 32.0858 8.09808 32.8957C7.213 34.7321 9.10888 36.6625 10.8744 35.7225C11.2551 35.5199 11.6117 35.0954 12.8914 33.3216C13.7464 32.1365 14.4693 31.1659 14.4978 31.1648C14.5374 31.1634 22.5839 42.102 23.5513 43.4722L23.7434 43.7445L15.5192 43.714L7.29487 43.6834L6.60256 43.3371C5.63902 42.8552 5.03895 42.2348 4.57278 41.2388L4.18568 40.412V24.0467V7.68151L4.5137 6.95053C4.69404 6.5486 5.03211 6.00146 5.26478 5.73489C5.72256 5.21051 6.66298 4.62572 7.3071 4.46497C7.54506 4.40555 15.4813 4.37141 26.7327 4.38159L45.756 4.39866L46.5392 4.80738ZM12.9642 8.06692C11.8297 8.38076 11.0265 8.87724 10.1414 9.81164C9.24372 10.7595 8.78366 11.599 8.48414 12.8351C8.11021 14.3791 8.30433 16.0578 9.02483 17.5097C9.4653 18.3974 10.7227 19.725 11.5634 20.1901C12.9385 20.9508 14.5284 21.1558 15.9907 20.7609C17.1614 20.4447 17.9565 19.9589 18.8542 19.0111C19.752 18.0632 20.212 17.2237 20.5115 15.9876C20.8855 14.4436 20.6913 12.7649 19.9708 11.313C19.5304 10.4253 18.273 9.09773 17.4323 8.63266C16.061 7.87411 14.4148 7.66564 12.9642 8.06692ZM15.6363 12.5918C16.2542 13.0235 16.5188 13.569 16.5188 14.4114C16.5188 15.2647 16.2537 15.7996 15.6068 16.2516C15.0286 16.6556 14.0164 16.6714 13.4286 16.2855C12.644 15.7706 12.2754 14.7481 12.5235 13.7752C12.6661 13.216 13.3004 12.4995 13.7942 12.34C14.3376 12.1644 15.1918 12.2811 15.6363 12.5918ZM42.5024 31.3805C42.0367 31.531 41.3774 32.2542 41.2443 32.7609C41.1787 33.0099 41.1342 34.4454 41.1339 36.3186L41.1333 39.4587L37.9386 39.492L34.7438 39.5252L34.3239 39.8188C33.6771 40.2709 33.4121 40.8058 33.4121 41.659C33.4121 42.5122 33.6771 43.0471 34.3239 43.4993L34.7438 43.7929L37.933 43.826L41.1223 43.8592L41.1537 47.2183C41.1847 50.5354 41.1882 50.5827 41.431 50.9951C41.5663 51.2249 41.8661 51.545 42.0971 51.7064C42.4471 51.951 42.6323 52 43.206 52C43.7798 52 43.965 51.951 44.315 51.7064C44.546 51.545 44.8458 51.2249 44.9811 50.9951C45.2239 50.5827 45.2274 50.5354 45.2584 47.2183L45.2898 43.8592L48.4713 43.826C51.6129 43.7933 51.6577 43.7896 52.0483 43.5332C52.2659 43.3904 52.5691 43.0738 52.7219 42.8299C52.9536 42.4604 53 42.2648 53 41.659C53 41.0532 52.9536 40.8577 52.7219 40.4881C52.5691 40.2442 52.2659 39.9276 52.0483 39.7848C51.6577 39.5285 51.6129 39.5247 48.4713 39.492L45.2898 39.4589L45.2584 36.0997C45.2274 32.7826 45.2239 32.7354 44.9811 32.3229C44.4923 31.4928 43.4185 31.0845 42.5024 31.3805Z"
          fill="#6868B4"
        />
      </svg>
      <p>{title}</p>
    </Wrapper>
  </Dragger>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 564px;
  height: 175px;
  color: ${({ theme }) => theme.colors.textInputColor};
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%236868B4' stroke-width='5' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 15px;
  margin-bottom: 86px;
  p {
    font-size: 20px;
  }
`
