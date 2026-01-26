---
type: method
interface: IModelDoc2
member: InsertSketchPictureData
returns: void
parameters:
  -
    name: Width
    type: System.Int16
    description: Width of the image
  -
    name: Height
    type: System.Int16
    description: Height of the image
  -
    name: PDataIn
    type: System.Int32
    description: Pointer to a raw bitmap (HBITMAP) cast as a long
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.InsertSketchPicture
keywords:
  - pictures
  - sketch
  - see
  - also
  - isketch
  - bitmaps
  - sketches
  - insertsketchpicturedata
  - imodeldoc2
  - model
  - doc2
  - insert
  - picture
  - data
  - width
  - int16
  - height
  - int32
  - void
---

# IModelDoc2.InsertSketchPictureData

Inserts a picture into the current sketch.

## Signature

```csharp
void InsertSketchPictureData( 
   System.Int16
Width
,
   System.Int16
Height
,
   System.Int32
PDataIn
)
```
## Parameters

- `Width` (System.Int16): Width of the image
- `Height` (System.Int16): Height of the image
- `PDataIn` (System.Int32): Pointer to a raw bitmap (HBITMAP) cast as a long

## Return Value

Unknown.

## Remarks

If your application must be x64 compatible, then use
IModelDoc2::InsertSketchPictureDatax64
.
A copy of the specified bitmap data is created. The SOLIDWORKS Design software does not release your bitmap object.

## See Also

- `IModelDoc2.InsertSketchPicture`