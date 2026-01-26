---
type: method
interface: IUserUnit
member: GetUnitsString
returns: System.String
parameters:
  -
    name: InEnglish
    type: System.Boolean
    description: True to return the string in English, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related: []
keywords:
  - getunitsstring
  - iuserunit
  - user
  - unit
  - units
  - string
  - english
  - boolean
---

# IUserUnit.GetUnitsString

Gets the string that describes the unit.

## Signature

```csharp
System.String GetUnitsString( 
   System.Boolean
InEnglish
)
```
## Parameters

- `InEnglish` (System.Boolean): True to return the string in English, false to not

## Return Value

String describing the unit

## Examples

- IUserUnit (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserUnit)