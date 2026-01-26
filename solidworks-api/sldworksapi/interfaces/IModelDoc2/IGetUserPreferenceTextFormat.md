---
type: method
interface: IModelDoc2
member: IGetUserPreferenceTextFormat
returns: TextFormat
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
  - igetuserpreferencetextformat
  - imodeldoc2
  - model
  - doc2
  - user
  - preference
  - text
  - format
  - value
  - int32
---

# IModelDoc2.IGetUserPreferenceTextFormat

Obsolete. Superseded by IModelDocExtension::GetUserPreferenceTextFormat.

## Signature

```csharp
TextFormat IGetUserPreferenceTextFormat( 
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