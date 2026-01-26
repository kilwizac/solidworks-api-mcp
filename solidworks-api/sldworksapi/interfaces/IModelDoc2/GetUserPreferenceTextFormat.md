---
type: method
interface: IModelDoc2
member: GetUserPreferenceTextFormat
returns: System.Object
parameters:
  -
    name: UserPreferenceValue
    type: System.Int32
    description: Value as defined in swUserPreferenceTextFormat_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - getuserpreferencetextformat
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - text
  - format
  - value
  - int32
  - object
  - note
  - vba
  - replace
  - dimension
---

# IModelDoc2.GetUserPreferenceTextFormat

Obsolete. Superseded by IModelDocExtension::GetUserPreferenceTextFormat.

## Signature

```csharp
System.Object GetUserPreferenceTextFormat( 
   System.Int32
UserPreferenceValue
)
```
## Parameters

- `UserPreferenceValue` (System.Int32): Value as defined in swUserPreferenceTextFormat_e

## Return Value

Text format associated with UserPreferenceValue

## Remarks

This method is equivalent to interactively getting document properties in the SOLIDWORKS Design software. See
System Options and Document Properties
for details.

## Examples

- Get Format of Note Text (VBA) (Get_Format_of_Note_Text_Example_VB.htm)
- Replace Dimension With Text (VBA) (Replace_Dimension_with_Text_Example_VB.htm)