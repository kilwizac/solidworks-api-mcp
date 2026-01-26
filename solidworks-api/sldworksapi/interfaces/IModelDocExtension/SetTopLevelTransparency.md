---
type: method
interface: IModelDocExtension
member: SetTopLevelTransparency
returns: System.Boolean
parameters:
  -
    name: InValue
    type: System.Boolean
    description: True to make this part or top-level assembly transparent, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - settopleveltransparency
  - imodeldocextension
  - model
  - doc
  - extension
  - top
  - level
  - transparency
  - value
  - boolean
---

# IModelDocExtension.SetTopLevelTransparency

Sets the transparency of this part or top-level assembly.

## Signature

```csharp
System.Boolean SetTopLevelTransparency( 
   System.Boolean
InValue
)
```
## Parameters

- `InValue` (System.Boolean): True to make this part or top-level assembly transparent, false to not

## Return Value

True if transparency of this part or top-level assembly successfully set, false if not