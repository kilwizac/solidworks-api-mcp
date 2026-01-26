---
type: method
interface: IModelDocExtension
member: InsertObjectFromFile
returns: SwOLEObject
parameters:
  -
    name: FilePath
    type: System.String
    description: Path and filename for the OLE object file
  -
    name: CreateLink
    type: System.Boolean
    description: True to create an external link to the OLE object file, false to embed the OLE object on the document
  -
    name: Aspect
    type: System.Int32
    description: Viewing aspect of the object as defined in the DVASPECT enumeration (see Remarks )
  -
    name: XPos
    type: System.Double
    description: x coordinate for the OLE object
  -
    name: YPos
    type: System.Double
    description: y coordinate for the OLE object
  -
    name: ZPos
    type: System.Double
    description: z coordinate for the OLE object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - ui
related:
  - IModelDocExtension.CreateOLEObject
  - IModelDocExtension.GetOLEObjectCount
  - IModelDocExtension.GetOLEObjects
  - IModelDocExtension.ICreateOLEObject
  - IModelDocExtension.IGetOLEObjects
keywords:
  - ole
  - objects
  - insertobjectfromfile
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - object
  - file
  - path
  - string
  - create
  - link
  - boolean
  - aspect
  - int32
  - pos
  - double
  - sw
---

# IModelDocExtension.InsertObjectFromFile

Inserts an OLE object from a file.

## Signature

```csharp
SwOLEObject InsertObjectFromFile( 
   System.String
FilePath
,
   System.Boolean
CreateLink
,
   System.Int32
Aspect
,
   System.Double
XPos
,
   System.Double
YPos
,
   System.Double
ZPos
)
```
## Parameters

- `FilePath` (System.String): Path and filename for the OLE object file
- `CreateLink` (System.Boolean): True to create an external link to the OLE object file, false to embed the OLE object on the document
- `Aspect` (System.Int32): Viewing aspect of the object as defined in the DVASPECT enumeration (see Remarks )
- `XPos` (System.Double): x coordinate for the OLE object
- `YPos` (System.Double): y coordinate for the OLE object
- `ZPos` (System.Double): z coordinate for the OLE object

## Return Value

Newly inserted object

## Remarks

Currently, only the drawing documents use the x,y,z coordinate position. Part and assembly documents place the inserted object at the upper-right corner of the model view.
The aspect argument uses the DVASPECT enumeration, which has the following values:
DVASPECT_CONTENT = 1
DVASPECT_THUMBNAIL = 2
DVASPECT_ICON = 4
DVASPECT_DOCPRINT = 8
See the MSDN documentation for additional details about the DVASPECT enumeration.

## See Also

- `IModelDocExtension.CreateOLEObject`
- `IModelDocExtension.GetOLEObjectCount`
- `IModelDocExtension.GetOLEObjects`
- `IModelDocExtension.ICreateOLEObject`
- `IModelDocExtension.IGetOLEObjects`