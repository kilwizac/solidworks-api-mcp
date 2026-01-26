---
type: method
interface: IBody2
member: GetIgesErrorCode
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Position of the error within the current list of errors
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetIgesErrorCount
keywords:
  - iges
  - files
  - see
  - also
  - iimportigesdata
  - errors
  - getigeserrorcode
  - ibody2
  - body2
  - error
  - code
  - index
  - int32
---

# IBody2.GetIgesErrorCode

Gets the current IGES error code.

## Signature

```csharp
System.Int32 GetIgesErrorCode( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Position of the error within the current list of errors

## Return Value

IGES error code

## Remarks

This method is intended for use during IGES processing only.

## See Also

- `IBody2.GetIgesErrorCount`