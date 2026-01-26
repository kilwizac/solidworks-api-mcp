---
type: method
interface: IBody2
member: IsSheetMetal
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - body
  - bodies
  - ibody2
  - issheetmetal
  - body2
  - boolean
---

# IBody2.IsSheetMetal

Gets whether this body was created by a sheet metal feature.

## Signature

```csharp
System.Boolean IsSheetMetal()
```
## Parameters

None.

## Return Value

True if this body was created by a sheet metal feature, false if not

## Remarks

This method returns false for sheet metal bodies that are obtained from lightweight components using
IComponent2::GetBodies3
.