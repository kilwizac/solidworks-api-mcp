---
type: method
interface: IBody
member: IOperations
returns: System.Int32
parameters:
  -
    name: OperationType
    type: System.Int32
    description: 
  -
    name: ToolBody
    type: Body
    description: 
  -
    name: NumMaxSections
    type: System.Int32
    description: 
  -
    name: ResultingBodies
    type: Body
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related: []
keywords:
  - ioperations
  - ibody
  - body
  - operations
  - operation
  - type
  - int32
  - tool
  - num
  - max
  - sections
  - resulting
  - bodies
---

# IBody.IOperations

Obsolete. Superseded by IBody2::IOperations2.

## Signature

```csharp
System.Int32 IOperations( 
   System.Int32
OperationType
,
   Body
ToolBody
,
   System.Int32
NumMaxSections
,
   ref Body
ResultingBodies
)
```
## Parameters

- `OperationType` (System.Int32): 
- `ToolBody` (Body): 
- `NumMaxSections` (System.Int32): 
- `ResultingBodies` (Body): 

## Return Value

Unknown.