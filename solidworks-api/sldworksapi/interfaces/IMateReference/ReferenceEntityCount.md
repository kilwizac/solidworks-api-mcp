---
type: property
interface: IMateReference
member: ReferenceEntityCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - referenceentitycount
  - imatereference
  - mate
  - reference
  - entity
  - count
  - int32
  - properties
  - vba
  - vb
  - net
readonly: true
---

# IMateReference.ReferenceEntityCount

Gets the number of mate reference entities for the selected mate reference.

## Signature

```csharp
System.Int32 ReferenceEntityCount {get;}
```
## Parameters

None.

## Return Value

Number of mate reference entities

## Remarks

This method returns a value 3 (primary, secondary, and tertiary).
Call this property before calling
IMateReference::ReferenceAlignment
,
IMateReference::ReferenceEntity
, or
IMateReference::ReferenceType
.

## Examples

- Get Mate Reference Properties (VBA) (Get_Mate_Reference_Properties_Example_VB.htm)
- Get Mate Reference Properties (VB.NET) (Get_Mate_Reference_Properties_Example_VBNET.htm)
- Get Mate Reference Properties (C#) (Get_Mate_Reference_Properties_Example_CSharp.htm)