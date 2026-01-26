---
type: method
interface: IFeatureManager
member: InsertSecurityNote
returns: Note
parameters:
  -
    name: Text
    type: System.String
    description: Text for note
  -
    name: FeatureOwner
    type: Feature
    description: Macro feature for this note
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - macro
  - feature
  - see
  - also
  - imacrofeaturedata
  - note
  - inote
  - insertsecuritynote
  - ifeaturemanager
  - manager
  - insert
  - security
  - text
  - string
  - owner
---

# IFeatureManager.InsertSecurityNote

Inserts a note for the specified macro feature.

## Signature

```csharp
Note InsertSecurityNote( 
   System.String
Text
,
   Feature
FeatureOwner
)
```
## Parameters

- `Text` (System.String): Text for note
- `FeatureOwner` (Feature): Macro feature for this note

## Return Value

Point to INote object

## Remarks

The note is for display purposes only and cannot be modified by the end user. For example, you could display the note to inform an end user that editing or deleting the macro feature is prohibited.
You associate the note with the specified macro feature in:
VB by using this method in the code that generates the macro feature and by setting swMacroFeatureSecurityEnableNote in the
macro feature's security function
. You should also include the conditions under which to display the note.
C++ by using this method in the code that generates the macro feature and by setting swMacroFeatureSecurityEnableNote for the Options argument of
ISwComFeature::Security
in the
macro feature's security function
. You should also include the conditions under which to display the note.