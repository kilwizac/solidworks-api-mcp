---
type: method
interface: IModelDoc2
member: InsertSketchPicture
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path to image file including file extension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.InsertSketchPictureData
keywords:
  - bitmaps
  - sketches
  - pictures
  - tif
  - files
  - sketch
  - see
  - also
  - isketch
  - insertsketchpicture
  - imodeldoc2
  - model
  - doc2
  - insert
  - picture
  - file
  - name
  - string
  - boolean
---

# IModelDoc2.InsertSketchPicture

Inserts a picture into the current sketch.

## Signature

```csharp
System.Boolean InsertSketchPicture( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path to image file including file extension

## Return Value

True if successful, false if not

## Remarks

Supported image types are:
Windows bitmap (*.bmp)
Tagged Image Format (*.tif)

## See Also

- `IModelDoc2.InsertSketchPictureData`