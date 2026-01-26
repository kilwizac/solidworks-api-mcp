---
type: method
interface: ISldWorks
member: PreviewDocx64
returns: System.Boolean
parameters:
  -
    name: HWnd
    type: System.Int64
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
  - previewdocx64
  - isldworks
  - sld
  - works
  - docx64
  - wnd
  - int64
  - full
  - name
  - string
  - boolean
---

# ISldWorks.PreviewDocx64

Displays a preview of a document to the specified window in 64-bit applications.

## Signature

```csharp
System.Boolean PreviewDocx64( 
   ref System.Int64
HWnd
,
   System.String
FullName
)
```
## Parameters

- `HWnd` (System.Int64): Window handle where you want the preview bitmap to display; this pointer is not valid across processes; therefore, this method only works if your application is implemented as a DLL
- `FullName` (System.String): Full path name of document to preview

## Return Value

True if successful, false if not

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.
The bitmap is stored with the fixed size shown with the interactive SOLIDWORKS Design preview option. If your window is a different size, then the image is scaled appropriately. If scaling is needed, then shaded images may not be as crisp as the original.
This method works well in the WM_PAINT Windows Message handler. If used in WM_ONINITDIALOG the dialog only displays the preview for a brief moment. The reason is that the dialog should be initialized completely before calling SldWorks::PreviewDocx64.
C++ programmers can also access this bitmap image from outside SOLIDWORKS Design. The bitmap was written with CArchive::Write( ) and is found in the Preview node in SOLIDWORKS Design part, assembly, and drawing files. The format of the Preview node is as follows: DWORD (data size) followed by continues chunk of memory of that size (data). The data being read can be cast to LPBITMAPINFO, which has all of the information required to display the bitmap. You may want to use StretchDIBits() when displaying your image of the bitmap.

## See Also

- `ISldWorks.GetPreviewBitmap`
- `ISldWorks.OpenDoc6`