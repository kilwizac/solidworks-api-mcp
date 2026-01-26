---
type: property
interface: IMassProperty
member: UserAssigned
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IMassProperty.ISetAssignedMassProp
  - IMassProperty.SetAssignedMassProp
keywords:
  - userassigned
  - imassproperty
  - mass
  - user
  - assigned
  - boolean
readonly: null
---

# IMassProperty.UserAssigned

Gets whether the mass property values are user-defined or calculated for this document, regardless of which model is being edited.

## Signature

```csharp
System.Boolean UserAssigned {get; set;}
```
## Parameters

None.

## Return Value

True if mass property values are user-defined, false if calculated EndOLEPropertyRow

## See Also

- `IMassProperty.ISetAssignedMassProp`
- `IMassProperty.SetAssignedMassProp`