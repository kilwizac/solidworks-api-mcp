---
type: method
interface: IModelDocExtension
member: CreateOLEObject
returns: SwOLEObject
parameters:
  -
    name: Aspect
    type: System.Int32
    description: Viewing aspect of the OLE object as defined in the DVASPECT enumeration (see Remarks )
  -
    name: Position
    type: System.Object
    description: Top-left and bottom-right positions (see Remarks )
  -
    name: Buffer
    type: System.Object
    description: Data for the OLE object (see Remarks )
  -
    name: ErrorCode
    type: System.Int32
    description: 0 if True or 1 if false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetOLEObjectCount
  - IModelDocExtension.GetOLEObjects
  - IModelDocExtension.ICreateOLEObject
  - IModelDocExtension.IGetOLEObjects
  - IModelDocExtension.InsertObjectFromFile
keywords:
  - ole
  - objects
  - createoleobject
  - imodeldocextension
  - model
  - doc
  - extension
  - create
  - object
  - aspect
  - int32
  - position
  - buffer
  - error
  - code
  - sw
---

# IModelDocExtension.CreateOLEObject

Creates an OLE object on the active document.

## Signature

```csharp
SwOLEObject CreateOLEObject( 
   System.Int32
Aspect
,
   System.Object
Position
,
   System.Object
Buffer
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `Aspect` (System.Int32): Viewing aspect of the OLE object as defined in the DVASPECT enumeration (see Remarks )
- `Position` (System.Object): Top-left and bottom-right positions (see Remarks )
- `Buffer` (System.Object): Data for the OLE object (see Remarks )
- `ErrorCode` (System.Int32): 0 if True or 1 if false

## Return Value

OLE object

## Remarks

Argument
Information
Aspect
Uses the DVASPECT enumeration, which has the following values:
DVASPECT_CONTENT = 1
DVASPECT_THUMBNAIL = 2
DVASPECT_ICON = 4
DVASPECT_DOCPRINT = 8
See the MSDN documentation for details about the DVASPECT enumeration.
Position
Specify:
Sheet coordinates for drawings.
Screen pixel coordinates for parts and assemblies.
Buffer
See
ISwOLEObject::Buffer
or specify
ISwOLEObject::IGetBuffer
- or -
Get the data from your own OLE object.
The data is in the format obtained from the Microsoft MFC object COleClientItem using the GetHGlobalFromILockBytes.

## See Also

- `IModelDocExtension.GetOLEObjectCount`
- `IModelDocExtension.GetOLEObjects`
- `IModelDocExtension.ICreateOLEObject`
- `IModelDocExtension.IGetOLEObjects`
- `IModelDocExtension.InsertObjectFromFile`