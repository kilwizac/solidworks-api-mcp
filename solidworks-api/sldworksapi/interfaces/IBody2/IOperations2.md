---
type: method
interface: IBody2
member: IOperations2
returns: EnumBodies2
parameters:
  -
    name: OperationType
    type: System.Int32
    description: Operation type as defined in swBodyOperationType_e
  -
    name: ToolBody
    type: Body2
    description: Pointer to the tool body
  -
    name: ErrorCode
    type: System.Int32
    description: Error indicator as defined in swBodyOperationError_e ; returns swBodyOperationNoError if SOLIDWORKS does not generate an error
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.Operations2
keywords:
  - temporary
  - bodies
  - sheet
  - ioperations2
  - ibody2
  - body2
  - operations2
  - operation
  - type
  - int32
  - tool
  - body
  - error
  - code
  - bodies2
---

# IBody2.IOperations2

Performs add, cut, and intersect (unite, subtract, and interfere) operations between two temporary bodies.

## Signature

```csharp
EnumBodies2 IOperations2( 
   System.Int32
OperationType
,
   Body2
ToolBody
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `OperationType` (System.Int32): Operation type as defined in swBodyOperationType_e
- `ToolBody` (Body2): Pointer to the tool body
- `ErrorCode` (System.Int32): Error indicator as defined in swBodyOperationError_e ; returns swBodyOperationNoError if SOLIDWORKS does not generate an error

## Return Value

Resulting bodies enumeration

## Remarks

If the target and tool bodies are the same in geometry, the result body of this method is NULL, and the return value is S_false.
This method works with two temporary bodies; one is the target and one is the tool. The output is a list of bodies resulting from the operation.
The two temporary bodies used in this function (the Body2 and ToolBody pointers) are invalid once the operation is complete. COM applications should release these two pointers after using this method. If your application needs to maintain these bodies, then you should make a copy of them using
IBody2::ICopy
before passing them to this routine.
To perform a
swBodyOperationType_e
.SWBODYINTERSECT between a sheet (surface)
and a solid body, the sheet body must be the target body.
Use
IBody2::Check3
for both bodies before using this method to ensure that both bodies are valid solids. Using this method with invalid bodies can cause unexpected results.
If a non-manifold error is returned, use
IBody2::ResetEdgeTolerances
to visit all of the edges in the body to reset their tolerances. Then use IBody2::Operations2 again.

## See Also

- `IBody2.Operations2`