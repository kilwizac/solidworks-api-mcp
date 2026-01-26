---
type: method
interface: IModelDocExtension
member: ICreateOLEObject
returns: SwOLEObject
parameters:
  -
    name: Aspect
    type: System.Int32
    description: Viewing aspect of the OLE object as defined in the DVASPECT enumeration (see Remarks )
  -
    name: Position
    type: System.Double
    description: Top-left and bottom-right positions (see Remarks )
  -
    name: ByteCount
    type: System.Int32
    description: Number of bytes
  -
    name: Buffer
    type: System.Byte
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
  - IModelDocExtension.CreateOLEObject
  - IModelDocExtension.GetOLEObjectCount
  - IModelDocExtension.GetOLEObjects
  - IModelDocExtension.IGetOLEObjects
  - IModelDocExtension.InsertObjectFromFile
keywords:
  - ole
  - objects
  - icreateoleobject
  - imodeldocextension
  - model
  - doc
  - extension
  - create
  - object
  - aspect
  - int32
  - position
  - double
  - byte
  - count
  - buffer
  - error
  - code
  - sw
---

# IModelDocExtension.ICreateOLEObject

Creates an OLE object on the active document.

## Signature

```csharp
SwOLEObject ICreateOLEObject( 
   System.Int32
Aspect
,
   ref System.Double
Position
,
   System.Int32
ByteCount
,
   ref System.byte
Buffer
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `Aspect` (System.Int32): Viewing aspect of the OLE object as defined in the DVASPECT enumeration (see Remarks )
- `Position` (System.Double): Top-left and bottom-right positions (see Remarks )
- `ByteCount` (System.Int32): Number of bytes
- `Buffer` (System.Byte): Data for the OLE object (see Remarks )
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

- `IModelDocExtension.CreateOLEObject`
- `IModelDocExtension.GetOLEObjectCount`
- `IModelDocExtension.GetOLEObjects`
- `IModelDocExtension.IGetOLEObjects`
- `IModelDocExtension.InsertObjectFromFile`