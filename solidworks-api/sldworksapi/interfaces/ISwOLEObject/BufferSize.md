---
type: property
interface: ISwOLEObject
member: BufferSize
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISwOLEObject.Buffer
keywords:
  - buffersize
  - iswoleobject
  - sw
  - ole
  - object
  - buffer
  - size
  - int32
readonly: true
---

# ISwOLEObject.BufferSize

Gets the size of the OLE object data.

## Signature

```csharp
System.Int32 BufferSize {get;}
```
## Parameters

None.

## Return Value

Size of the OLE object data

## Remarks

Call this method before calling
ISwOLEObject::IGetBuffer
to get the size of the array for that method.

## Examples

- ISwOLEObject (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwOLEObject)

## See Also

- `ISwOLEObject.Buffer`