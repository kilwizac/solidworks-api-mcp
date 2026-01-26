---
type: property
interface: IDimensionTolerance
member: ShowParenthesis
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutVariable.ShowParenthesis
keywords:
  - showparenthesis
  - idimensiontolerance
  - dimension
  - tolerance
  - show
  - parenthesis
  - boolean
readonly: null
---

# IDimensionTolerance.ShowParenthesis

Indicates whether to show parentheses around linear tolerance dimensions.

## Signature

```csharp
System.Boolean ShowParenthesis {get; set;}
```
## Parameters

None.

## Return Value

True to show parentheses around linear tolerance dimensions, false to not

## Remarks

This property supports bilateral, symmetric, or fit-with-tolerance types only.
In SOLIDWORKS 2016 and later, use
ICalloutVariable::ShowParenthesis
to set whether to show parentheses in a hole's display dimension with multiple values in a callout. Calling IDimensionTolerance::ShowParenthesis to set whether to show parentheses in a hole's display dimension with multiple values in a callout does not override ICalloutVariable::ShowParenthesis' setting.
To see the effects of changing this property, use
IModelDoc2::GraphicsRedraw2
.

## See Also

- `ICalloutVariable.ShowParenthesis`