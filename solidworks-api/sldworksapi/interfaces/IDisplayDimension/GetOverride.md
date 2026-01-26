---
type: method
interface: IDisplayDimension
member: GetOverride
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getoverride
  - idisplaydimension
  - display
  - dimension
  - override
  - boolean
---

# IDisplayDimension.GetOverride

Gets whether to display the actual dimension value or to override it with another value.

## Signature

```csharp
System.Boolean GetOverride()
```
## Parameters

None.

## Return Value

True to display the override value, false to display the actual dimension value

## Remarks

Use
IDisplayDimension::GetOverrideValue
to get the override value.
Use
IDisplayDimension::SetOverride
to set whether to override the actual dimension value with another value and, if so, that value.