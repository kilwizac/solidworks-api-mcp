---
type: property
interface: IFaultEntity
member: ErrorCode
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index number indicating the entity with the fault
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - errorcode
  - ifaultentity
  - fault
  - entity
  - error
  - code
  - index
  - int32
  - check
  - bodies
  - faults
  - vba
  - faces
  - edges
  - vb
  - net
readonly: true
---

# IFaultEntity.ErrorCode

Gets the error for the fault for the specified entity.

## Signature

```csharp
System.Int32 ErrorCode( 
   System.Int32
Index
) {get;}
```
## Parameters

- `Index` (System.Int32): 0-based index number indicating the entity with the fault

## Return Value

Error as defined by swFaultEntityErrorCode_e ; -1 indicates an unknown error

## Remarks

To determine the value for index, call
IFaultEntity::Count
before calling this property. Call
IFaultEntity::Entity2
to get the entity.

## Examples

- Check Bodies for Faults (VBA) (Check_Bodies_for_Faults_Example_VB.htm)
- Check Faces for Faults (VBA) (Check_Faces_for_Faults_Example_VB.htm)
- Check Edges for Faults (C#) (Check_Edges_for_Faults_Example_CSharp.htm)
- Check Edges for Faults (VB.NET) (Check_Edges_for_Faults_Example_VBNET.htm)
- Check Edges for Faults (VBA) (Check_Edges_for_Faults_Example_VB.htm)