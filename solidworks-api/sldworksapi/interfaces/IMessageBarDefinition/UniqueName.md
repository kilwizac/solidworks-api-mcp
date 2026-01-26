---
type: property
interface: IMessageBarDefinition
member: UniqueName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - uniquename
  - imessagebardefinition
  - message
  - bar
  - definition
  - unique
  - name
  - string
readonly: true
---

# IMessageBarDefinition.UniqueName

Gets the ID of this message bar.

## Signature

```csharp
System.String UniqueName {get;}
```
## Parameters

None.

## Return Value

Unique ID of this message bar

## Remarks

The ID is defined by the add-in in its call to
ISldWorks::DefineMessageBar
.
It is the add-in's responsibility to ensure that the ID is unique by using, for example, a combination of add-in module name and unique message identifier:
"MyAddInName+ID_MYMESSAGE1"