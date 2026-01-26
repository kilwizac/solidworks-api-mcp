---
type: property
interface: IEquationMgr
member: Suppression
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the equation
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - suppression
  - iequationmgr
  - equation
  - mgr
  - index
  - int32
  - boolean
readonly: null
---

# IEquationMgr.Suppression

Obsolete as of SOLIDWORKS 2014 and later.

## Signature

```csharp
System.Boolean Suppression( 
   System.Int32
Index
) {get; set;}
```
## Parameters

- `Index` (System.Int32): 0-based index of the equation

## Return Value

True if the equation is suppressed, false if not