---
type: method
interface: IUserUnit
member: GetFullUnitName
returns: System.String
parameters:
  -
    name: Plural
    type: System.Boolean
    description: True if the name of the unit is plural, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related: []
keywords:
  - getfullunitname
  - iuserunit
  - user
  - unit
  - full
  - name
  - plural
  - boolean
  - string
---

# IUserUnit.GetFullUnitName

Gets the full name of the unit.

## Signature

```csharp
System.String GetFullUnitName( 
   System.Boolean
Plural
)
```
## Parameters

- `Plural` (System.Boolean): True if the name of the unit is plural, false if not

## Return Value

Full name of the unit

## Examples

- IUserUnit (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserUnit)