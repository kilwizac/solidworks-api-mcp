---
type: method
interface: IDisplayDimension
member: GetOverrideValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getoverridevalue
  - idisplaydimension
  - display
  - dimension
  - override
  - value
  - double
---

# IDisplayDimension.GetOverrideValue

Gets the value to display instead of the actual dimension value.

## Signature

```csharp
System.Double GetOverrideValue()
```
## Parameters

None.

## Return Value

Value to display instead of the actual dimension value

## Remarks

Use
IDisplayDimension::GetOverride
to get whether to display the actual dimension value or to override it with another value.
Use
IDisplayDimension::SetOverride
to set whether to override the actual dimension value with another value, and, if so, that value.