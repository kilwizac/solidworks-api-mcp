---
type: method
interface: IDisplayDimension
member: SetOverride
returns: System.Boolean
parameters:
  -
    name: Override
    type: System.Boolean
    description: True to display a value other than the actual dimension value, false to display the actual value
  -
    name: Value
    type: System.Double
    description: Value to display instead of the actual dimension value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setoverride
  - idisplaydimension
  - display
  - dimension
  - override
  - boolean
  - value
  - double
---

# IDisplayDimension.SetOverride

Sets whether to display the actual dimension value or to display another value, and, if so, that value.

## Signature

```csharp
System.Boolean SetOverride( 
   System.Boolean
Override
,
   System.Double
Value
)
```
## Parameters

- `Override` (System.Boolean): True to display a value other than the actual dimension value, false to display the actual value
- `Value` (System.Double): Value to display instead of the actual dimension value

## Return Value

True if setting an override value is successful, false if not

## Remarks

This method can only be used on a display dimension in a drawing. In a part or assembly, this method takes no action and returns false.
If Override is set to false, then the Value argument is ignored.
Use
IDisplayDimension::GetOverride
to get whether the actual dimension value or another value is displayed.
Use
IDisplayDimension::GetOverrideValue
to get the value to display instead of the actual dimension value.