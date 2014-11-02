Meteor.startup ->
  if Columns.find().count() == 0
    console.log "creating columns"
    for column, index in ["Up Next", "Development", "Acceptance", "Done"]
      Columns.insert
        name: column
        index: index
        cards: []
