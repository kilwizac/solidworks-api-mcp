---
type: method
interface: ISldWorks
member: PreviewDoc
returns: System.Boolean
parameters:
  -
    name: HWnd
    type: System.Int32
    description: Window handle where you want the preview bitmap to display; this pointer is not valid across processes; therefore, this method only works if your application is implemented as a DLL
  -
    name: FullName
    type: System.String
    description: Full path name of document to preview
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetPreviewBitmap
  - ISldWorks.OpenDoc6
keywords:
  - document
  - preview
  - previewdoc
  - isldworks
  - sld
  - works
  - doc
  - wnd
  - int32
  - full
  - name
  - string
  - boolean
---

# ISldWorks.PreviewDoc

Displays a preview of a document to the specified window.

## Signature

```csharp
System.Boolean PreviewDoc( 
   ref System.Int32
HWnd
,
   System.String
FullName
)
```
## Parameters

- `HWnd` (System.Int32): Window handle where you want the preview bitmap to display; this pointer is not valid across processes; therefore, this method only works if your application is implemented as a DLL
- `FullName` (System.String): Full path name of document to preview

## Return Value

True if successful, false if not

## Remarks

If your application must be x64 compatible, then use
ISldWorks::PreviewDocx64
.
The bitmap is stored with the fixed size shown with the interactive SOLIDWORKS preview option. If your window is a different size, then the image is scaled appropriately. If scaling is needed, then shaded images may not be as crisp as the original.
This method works well in the WM_PAINT Windows Message handler. If used in WM_ONINITDIALOG the dialog only displays the preview for a brief moment. The reason is that the dialog should be initialized completely before calling SldWorks::PreviewDoc.
C++ programmers can also access this bitmap image from outside SOLIDWORKS. The bitmap was written with CArchive::Write( ) and is found in the Preview node in SOLIDWORKS part, assembly and drawing files. The format of the Preview node is as follows: DWORD (data size) followed by continues chunk of memory of that size (data). The data being read can be cast to LPBITMAPINFO, which has all of the information required to display the bitmap. You may want to use StretchDIBits() when displaying your image of the bitmap.

## See Also

- `ISldWorks.GetPreviewBitmap`
- `ISldWorks.OpenDoc6`