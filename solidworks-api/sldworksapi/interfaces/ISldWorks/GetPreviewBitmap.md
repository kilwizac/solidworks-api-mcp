---
type: method
interface: ISldWorks
member: GetPreviewBitmap
returns: System.Object
parameters:
  -
    name: FilePathName
    type: System.String
    description: Path and file name of the SOLIDWORKS document
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.SaveBMP
  - ISldWorks.GetPreviewBitmapFile
  - ISldWorks.PreviewDoc
  - ISldWorks.PreviewDocx64
keywords:
  - bitmaps
  - preview
  - bmp
  - getpreviewbitmap
  - isldworks
  - sld
  - works
  - bitmap
  - file
  - path
  - name
  - string
  - config
  - object
  - vba
---

# ISldWorks.GetPreviewBitmap

Gets the preview bitmap (.bmp) for the specified configuration, regardless if the SOLIDWORKS document is open or closed.

## Signature

```csharp
System.Object GetPreviewBitmap( 
   System.String
FilePathName
,
   System.String
ConfigName
)
```
## Parameters

- `FilePathName` (System.String): Path and file name of the SOLIDWORKS document
- `ConfigName` (System.String): Name of the configuration

## Return Value

Dispatch pointer to IPictureDisp interface, the preview bitmap (.bmp) (see Remarks )

## Remarks

The preview bitmap is the bitmap (.bmp) that appears in the
Preview
box on the Open dialog.
NOTES:
Currently only in-process applications (that is, macros or add-ins) can use this method; out-of-process applications (that is, executables) will get an automation error because the IPictureDisp interface cannot be marshalled across process boundaries. This is a Microsoft behavior by design. See the Microsoft Knowledge Base for details.
This method is not supported in macros or out-of-process applications in SOLIDWORKS x64.

## Examples

- Get Preview Bitmap (VBA) (Get_Preview_Bitmap_Example_VB.htm)

## See Also

- `IModelDoc2.SaveBMP`
- `ISldWorks.GetPreviewBitmapFile`
- `ISldWorks.PreviewDoc`
- `ISldWorks.PreviewDocx64`