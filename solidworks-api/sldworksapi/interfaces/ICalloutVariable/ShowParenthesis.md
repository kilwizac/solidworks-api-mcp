---
type: property
interface: ICalloutVariable
member: ShowParenthesis
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - showparenthesis
  - icalloutvariable
  - callout
  - variable
  - show
  - parenthesis
  - boolean
readonly: null
---

# ICalloutVariable.ShowParenthesis

Gets or sets whether to show parentheses around linear tolerance dimensions in a hole callout.

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
In SOLIDWORKS 2016 and later, use this property to set whether to show parentheses around linear tolerance dimensions in a hole callout. Calling
IDimensionTolerance::ShowParenthesis
to set whether to show parentheses around linear tolerance dimensions in a hole callout does not override this property's setting.