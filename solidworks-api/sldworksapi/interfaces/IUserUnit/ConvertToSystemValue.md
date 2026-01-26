---
type: method
interface: IUserUnit
member: ConvertToSystemValue
returns: System.Boolean
parameters:
  -
    name: UnitText
    type: System.String
    description: Value to convert
  -
    name: ComputedValue
    type: System.Double
    description: Converted value in document units
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related:
  - IUserUnit.ConvertDoubleToSystemValue
  - IUserUnit.ConvertToUserUnit
keywords:
  - converttosystemvalue
  - iuserunit
  - user
  - unit
  - convert
  - value
  - text
  - string
  - computed
  - double
  - boolean
---

# IUserUnit.ConvertToSystemValue

Converts a text string to a document unit value.

## Signature

```csharp
System.Boolean ConvertToSystemValue( 
   System.String
UnitText
,
   out System.Double
ComputedValue
)
```
## Parameters

- `UnitText` (System.String): Value to convert
- `ComputedValue` (System.Double): Converted value in document units

## Return Value

True if successful, false if not

## Remarks

This takes the value directly from a textbox control and passes it in to convert to a double value.
This imitates the behavior of when working in the SOLIDWORKS Design user interface and passing a value like "10 / 2" into one of the values on a dialog box.

## Examples

- IUserUnit (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserUnit)

## See Also

- `IUserUnit.ConvertDoubleToSystemValue`
- `IUserUnit.ConvertToUserUnit`