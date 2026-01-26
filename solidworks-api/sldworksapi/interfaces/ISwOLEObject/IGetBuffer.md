---
type: method
interface: ISwOLEObject
member: IGetBuffer
returns: void
parameters:
  -
    name: OleBufferSize
    type: System.Int32
    description: Size of the OLE buffer
  -
    name: BOleData
    type: System.Byte
    description: Byte array for the buffer data
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISwOLEObject.Buffer
keywords:
  - igetbuffer
  - iswoleobject
  - sw
  - ole
  - object
  - buffer
  - size
  - int32
  - data
  - byte
  - void
---

# ISwOLEObject.IGetBuffer

Gets the data for this OLE object.

## Signature

```csharp
void IGetBuffer( 
   System.Int32
OleBufferSize
,
   out System.byte
BOleData
)
```
## Parameters

- `OleBufferSize` (System.Int32): Size of the OLE buffer
- `BOleData` (System.Byte): Byte array for the buffer data

## Return Value

Unknown.

## Remarks

Before calling this method, call
ISwOLEObject::BufferSize
to get the value for OleBufferSize.

## See Also

- `ISwOLEObject.Buffer`