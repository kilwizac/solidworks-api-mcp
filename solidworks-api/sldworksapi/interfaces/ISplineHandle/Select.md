---
type: method
interface: ISplineHandle
member: Select
returns: System.Boolean
parameters:
  -
    name: AppendFlag
    type: System.Boolean
    description: True appends the spline handle to the selection list, false replaces the selection list with the spline handle
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - sketches
related: []
keywords:
  - select
  - isplinehandle
  - spline
  - handle
  - append
  - flag
  - boolean
---

# ISplineHandle.Select

Selects a spline handle.

## Signature

```csharp
System.Boolean Select( 
   System.Boolean
AppendFlag
)
```
## Parameters

- `AppendFlag` (System.Boolean): True appends the spline handle to the selection list, false replaces the selection list with the spline handle

## Return Value

True if the spline handle is selected, false if not