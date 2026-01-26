---
type: method
interface: IBody2
member: Copy2
returns: System.Object
parameters:
  -
    name: PreserveFaceIDs
    type: System.Boolean
    description: True to copy face IDs, false to create new IDs
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - copy2
  - ibody2
  - body2
  - preserve
  - face
  - ds
  - boolean
  - object
---

# IBody2.Copy2

Gets a copy of this body.

## Signature

```csharp
System.Object Copy2( 
   System.Boolean
PreserveFaceIDs
)
```
## Parameters

- `PreserveFaceIDs` (System.Boolean): True to copy face IDs, false to create new IDs

## Return Value

Copied IBody2