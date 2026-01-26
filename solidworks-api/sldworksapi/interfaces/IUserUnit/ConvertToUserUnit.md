---
type: method
interface: IUserUnit
member: ConvertToUserUnit
returns: System.String
parameters:
  -
    name: ValueIn
    type: System.Double
    description: Value to convert
  -
    name: ShowUsernames
    type: System.Boolean
    description: True to show the user names, false to not
  -
    name: NameInEnglish
    type: System.Boolean
    description: True to return the name in English, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related:
  - IUserUnit.ConvertDoubleToSystemValue
  - IUserUnit.ConvertToSystemValue
keywords:
  - converttouserunit
  - iuserunit
  - user
  - unit
  - convert
  - value
  - double
  - show
  - usernames
  - boolean
  - name
  - english
  - string
---

# IUserUnit.ConvertToUserUnit

Converts the input value to document units.

## Signature

```csharp
System.String ConvertToUserUnit( 
   System.Double
ValueIn
,
   System.Boolean
ShowUsernames
,
   System.Boolean
NameInEnglish
)
```
## Parameters

- `ValueIn` (System.Double): Value to convert
- `ShowUsernames` (System.Boolean): True to show the user names, false to not
- `NameInEnglish` (System.Boolean): True to return the name in English, false to not

## Return Value

Conversion to a string

## Examples

- IUserUnit (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserUnit)

## See Also

- `IUserUnit.ConvertDoubleToSystemValue`
- `IUserUnit.ConvertToSystemValue`