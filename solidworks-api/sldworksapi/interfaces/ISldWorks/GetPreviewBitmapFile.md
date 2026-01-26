---
type: method
interface: ISldWorks
member: GetPreviewBitmapFile
returns: System.Boolean
parameters:
  -
    name: DocumentPath
    type: System.String
    description: Path and file name of the SOLIDWORKS document whose preview bitmap (.bmp) you want to save
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration
  -
    name: BitMapFile
    type: System.String
    description: Filename for the preview
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IModelDoc2.SaveBMP
  - ISldWorks.GetPreviewBitmap
  - ISldWorks.PreviewDoc
  - ISldWorks.PreviewDocx64
keywords:
  - bitmaps
  - bmp
  - preview
  - getpreviewbitmapfile
  - isldworks
  - sld
  - works
  - bitmap
  - file
  - document
  - path
  - string
  - config
  - name
  - bit
  - map
  - boolean
  - save
  - configuration
  - data
  - vb
  - net
  - vba
---

# ISldWorks.GetPreviewBitmapFile

Gets the specified preview bitmap of a document and saves it as a Windows bitmap file (.bmp) using the specified filename.

## Signature

```csharp
System.Boolean GetPreviewBitmapFile( 
   System.String
DocumentPath
,
   System.String
ConfigName
,
   System.String
BitMapFile
)
```
## Parameters

- `DocumentPath` (System.String): Path and file name of the SOLIDWORKS document whose preview bitmap (.bmp) you want to save
- `ConfigName` (System.String): Name of the configuration
- `BitMapFile` (System.String): Filename for the preview

## Return Value

True if the preview bitmap (.bmp) is saved, false if not

## Examples

- Save Configuration Data (C#) (Save_Configuration_Data_Example_CSharp.htm)
- Save Configuration Data (VB.NET) (Save_Configuration_Data_Example_VBNET.htm)
- Save Configuration Data (VBA) (Save_Configuration_Data_Example_VB.htm)

## See Also

- `IModelDoc2.SaveBMP`
- `ISldWorks.GetPreviewBitmap`
- `ISldWorks.PreviewDoc`
- `ISldWorks.PreviewDocx64`