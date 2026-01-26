---
type: method
interface: IModelDoc2
member: InsertSketchPictureDatax64
returns: void
parameters:
  -
    name: Width
    type: System.Int32
    description: Width of the image
  -
    name: Height
    type: System.Int32
    description: Height of the image
  -
    name: PDataIn
    type: System.Int64
    description: Pointer to a raw bitmap (HBITMAP) cast as a LONGLONG
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
  - insertsketchpicturedatax64
  - imodeldoc2
  - model
  - doc2
  - insert
  - sketch
  - picture
  - datax64
  - width
  - int32
  - height
  - data
  - int64
  - void
---

# IModelDoc2.InsertSketchPictureDatax64

Inserts a picture into the current sketch in 64-bit applications.

## Signature

```csharp
void InsertSketchPictureDatax64( 
   System.Int32
Width
,
   System.Int32
Height
,
   System.Int64
PDataIn
)
```
## Parameters

- `Width` (System.Int32): Width of the image
- `Height` (System.Int32): Height of the image
- `PDataIn` (System.Int64): Pointer to a raw bitmap (HBITMAP) cast as a LONGLONG

## Return Value

Unknown.

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.
A copy of the specified bitmap data is created. The SOLIDWORKS Design software does not release your bitmap object.

## See Also

- `IModelDoc2.InsertSketchPictureData`