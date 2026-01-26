---
type: method
interface: IUserUnit
member: ConvertDoubleToSystemValue
returns: System.Double
parameters:
  -
    name: UserValue
    type: System.Double
    description: Value to convert
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related:
  - IUserUnit.ConvertToSystemValue
  - IUserUnit.ConvertToUserUnit
keywords:
  - convertdoubletosystemvalue
  - iuserunit
  - user
  - unit
  - convert
  - double
  - value
---

# IUserUnit.ConvertDoubleToSystemValue

Converts a double value to a document unit value.

## Signature

```csharp
System.Double ConvertDoubleToSystemValue( 
   System.Double
UserValue
)
```
## Parameters

- `UserValue` (System.Double): Value to convert

## Return Value

Converted document unit value

## Examples

- IUserUnit (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserUnit)

## See Also

- `IUserUnit.ConvertToSystemValue`
- `IUserUnit.ConvertToUserUnit`