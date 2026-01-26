---
type: method
interface: IModelDoc2
member: SaveBMP
returns: System.Boolean
parameters:
  -
    name: FileNameIn
    type: System.String
    description: Path and file name of the new BMP file
  -
    name: WidthIn
    type: System.Int32
    description: Width of the BMP
  -
    name: HeightIn
    type: System.Int32
    description: Height of the BMP
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - ISldWorks.GetPreviewBitmap
  - ISldWorks.GetPreviewBitmapFile
keywords:
  - bitmaps
  - bmp
  - savebmp
  - imodeldoc2
  - model
  - doc2
  - save
  - file
  - name
  - string
  - width
  - int32
  - height
  - boolean
  - bitmap
  - vb
  - net
  - vba
---

# IModelDoc2.SaveBMP

Saves the current view as a bitmap (BMP) file.

## Signature

```csharp
System.Boolean SaveBMP( 
   System.String
FileNameIn
,
   System.Int32
WidthIn
,
   System.Int32
HeightIn
)
```
## Parameters

- `FileNameIn` (System.String): Path and file name of the new BMP file
- `WidthIn` (System.Int32): Width of the BMP
- `HeightIn` (System.Int32): Height of the BMP

## Return Value

True if file is created successfully, false if not

## Remarks

Include the full path to the file in FilenameIn and use filename extension of .bmp.
If WidthIn or the HeightIn is less than or equal to 0, then the view size is based on the current window size.

## Examples

- Save Model as Bitmap (C#) (Save_Model_as_Bitmap_Example_CSharp.htm)
- Save Model as Bitmap (VB.NET) (Save_Model_as_Bitmap_Example_VBNET.htm)
- Save Model as Bitmap (VBA) (Save_Model_as_Bitmap_Example_VB.htm)

## See Also

- `ISldWorks.GetPreviewBitmap`
- `ISldWorks.GetPreviewBitmapFile`